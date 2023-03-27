from flask import jsonify, request
from models import app, db, Park, City, Airport
from schema import city_schema, park_schema, airport_schema
from sqlalchemy import desc, or_, not_
import json

PARKS, CITIES, AIRPORTS = 468, 101, 731

DEFAULT_PAGE_SIZE = 12


@app.route("/")
def home():
    return ""


@app.route("/cities")
def get_cities():
    page = request.args.get("page")
    sort = request.args.get("sort")
    search = request.args.get("search")

    query = db.session.query(City)

    if search is not None:
        search_terms = search.split()
        clauses = [City.long_name.like("%{0}%".format(k)) for k in search_terms]
        clauses += [City.state.like("%{0}%".format(k)) for k in search_terms]
        clauses += [City.cost.like("%{0}%".format(k)) for k in search_terms]
        clauses += [City.population.like("%{0}%".format(k)) for k in search_terms]
        clauses += [City.rating.like("%{0}%".format(k)) for k in search_terms]
        clauses += [City.safety.like("%{0}%".format(k)) for k in search_terms]
        query = query.filter(or_(*clauses))

    for filter in City.filters:
        arg = request.args.get(filter)
        if arg is not None:
            query = query.filter(getattr(City, filter) == arg)

    if sort is not None:
        sort_params = sort.split("_")
        if sort_params[0] in City.sorts:
            sort_attr = getattr(City, sort_params[0])
            asc = sort_params[1] == "asc"
            query = query.order_by(sort_attr if asc else desc(sort_attr))

    if page is not None:
        query = paginate(query, int(page))

    result = city_schema.dump(query, many=True)
    return jsonify(
        {
            "count": len(result),
            "data": result,
        }
    )   


@app.route("/airports")
def get_airports():
    page = request.args.get("page")
    sort = request.args.get("sort")
    search = request.args.get("search")

    query = db.session.query(Airport)

    if search is not None:
        search_terms = search.split()
        clauses = [Airport.name.like("%{0}%".format(k)) for k in search_terms]
        clauses += [Airport.address.like("%{0}%".format(k)) for k in search_terms]
        clauses += [Airport.city.like("%{0}%".format(k)) for k in search_terms]
        clauses += [Airport.iata_code.like("%{0}%".format(k)) for k in search_terms]
        clauses += [Airport.icao_code.like("%{0}%".format(k)) for k in search_terms]
        clauses += [Airport.state.like("%{0}%".format(k)) for k in search_terms]
        clauses += [Airport.phone.like("%{0}%".format(k)) for k in search_terms]
        clauses += [Airport.zip_code.like("%{0}%".format(k)) for k in search_terms]
        query = query.filter(or_(*clauses))

    for filter in Airport.filters:
        arg = request.args.get(filter)
        if arg is not None:
            if filter == "website":
                if arg == "no":
                    query = query.filter(Airport.website.like(""))
                else:
                    query = query.filter(not_(Airport.website.like("")))
            elif filter == "phone":
                if arg == "no":
                    query = query.filter(Airport.phone.like(""))
                else:
                    query = query.filter(not_(Airport.phone.like("")))
            else:
                query = query.filter(getattr(Airport, filter) == arg)
           

    if sort is not None:
        sort_params = sort.split("_")
        if sort_params[0] in Airport.sorts:
            sort_attr = getattr(Airport, sort_params[0])
            asc = sort_params[1] == "asc"
            if sort_attr == "iata":
                asc = sort_params[2] == "asc"
            query = query.order_by(sort_attr if asc else desc(sort_attr))

    if page is not None:
        query = paginate(query, int(page))

    result = airport_schema.dump(query, many=True)
    return jsonify(
        {
            "count": len(result),
            "data": result,
        }
    )

@app.route("/parks")
def get_parks():
    page = request.args.get("page")
    sort = request.args.get("sort")
    search = request.args.get("search")

    query = db.session.query(Park)

    if search is not None:
        search_terms = search.split()
        clauses = [Park.name.like("%{0}%".format(k)) for k in search_terms]
        clauses += [Park.phone.like("%{0}%".format(k)) for k in search_terms]
        clauses += [Park.email.like("%{0}%".format(k)) for k in search_terms]
        query = query.filter(or_(*clauses))

    for filter in Park.filters:
        arg = request.args.get(filter)
        if arg is not None:
            if filter == "states":
                query = query.filter(Park.states.contains(arg))
            elif filter == "activities":
                query = query.filter(Park.activities.contains(arg))
            elif filter == "topics":
                query = query.filter(Park.topics.contains(arg))
            else:
                query = query.filter(getattr(Park, filter) == arg)

    if sort is not None:
        sort_params = sort.split("_")
        if sort_params[0] in Park.sorts:
            sort_attr = getattr(Park, sort_params[0])
            asc = sort_params[1] == "asc"
            query = query.order_by(sort_attr if asc else desc(sort_attr))

    if page is not None:
        query = paginate(query, int(page))

    result = park_schema.dump(query, many=True)
    return jsonify(
        {
            "count": len(result),
            "data": result,
        }
    )


@app.route("/city/<int:r_id>")
def get_city(r_id):
    query = db.session.query(City).filter_by(id=r_id)
    result = city_schema.dump(query, many=True)[0]
    return jsonify({"data": result})


@app.route("/airport/<int:r_id>")
def get_airport(r_id):
    query = db.session.query(Airport).filter_by(id=r_id)
    result = airport_schema.dump(query, many=True)[0]
    return jsonify({"data": result})


@app.route("/park/<int:r_id>")
def get_park(r_id):
    query = db.session.query(Park).filter_by(id=r_id)
    result = park_schema.dump(query, many=True)[0]
    return jsonify({"data": result})


def paginate(query, page_num, page_size=DEFAULT_PAGE_SIZE):
    return query.paginate(page=page_num, per_page=page_size, error_out=False).items


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
