FROM python:2.7
EXPOSE 5000/tcp
WORKDIR /backend
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY app.py .
CMD [ "python", "./app.py" ]