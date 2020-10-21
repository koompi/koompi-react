FROM archlinux
WORKDIR /mail-marketing

RUN pacman -Syu --noconfirm
RUN pacman -S python3 python-pip cmake gcc python-virtualenv python-distlib linux-headers --noconfirm
COPY requirements.txt requirements.txt
RUN pip install --upgrade pip
RUN pip install --upgrade pip setuptools wheel fastapi_mail
RUN pip3 install -r requirements.txt

CMD ["cd ./MailMarketing", "python app.py"]
