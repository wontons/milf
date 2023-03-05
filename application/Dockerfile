FROM python:3.9

WORKDIR /usr/src/app

RUN pip install --upgrade pip

COPY requirements.txt .

RUN pip install -r requirements.txt

EXPOSE 5000

COPY . .

CMD [ "gunicorn", "wsgi:app" , "-w 2", "-b 0.0.0.0:5000", "-t 30"]