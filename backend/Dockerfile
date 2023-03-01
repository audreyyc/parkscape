FROM python:2.7
EXPOSE 5000/tcp
WORKDIR /backend

RUN apt-get update -y
RUN apt-get install python-mysqldb

COPY requirements.txt .
RUN pip install -r requirements.txt
COPY app.py .
CMD [ "python", "./app.py" ]