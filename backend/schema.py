from flask_marshmallow import Marshmallow
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from models import City, Park, Airport

ma = Marshmallow()

class CitySchema(SQLAlchemyAutoSchema):
    class Meta:
        model = City

class ParkSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Park

class AirportSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Airport

city_schema = CitySchema()
park_schema = ParkSchema()
airport_schema = AirportSchema()