FROM python:3
EXPOSE 5000/tcp
WORKDIR /backend

RUN apt-get update -y
# RUN apt-get install python-mysqldb

COPY requirements.txt .
RUN pip install -r requirements.txt
COPY app.py .
COPY models.py .
COPY schema.py .
CMD [ "python3", "./app.py" ]