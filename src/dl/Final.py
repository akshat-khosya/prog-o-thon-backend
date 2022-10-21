from pickle import FALSE
import cv2
import os
import numpy as np
from PIL import ImageTk,Image
import pandas as pd
import csv
import shutil
haarscasecade_path='C:/Users/20106/Documents/prog-o-thon-backend/src/dl/haarcascade_frontalface_default.xml'
trainimagelabel_path = (
    "C:/Users/20106/Documents/prog-o-thon-backend/src/dl/TrainingImageLabel/trainner.yml"
)
studentdetail_path = (
    "C:/Users/20106/Documents/prog-o-thon-backend/src/dl/StudentDetails/studentdetails.csv"
)
def modelcal():
    recognizer= cv2.face.LBPHFaceRecognizer_create()
    try:
        recognizer.read(trainimagelabel_path)
    except:
        e= "Model not found,please train model"
    facecasCade=cv2.CascadeClassifier(haarscasecade_path)
    df=pd.read_csv(studentdetail_path)
    cam=cv2.VideoCapture(0)
    font= cv2.FONT_HERSHEY_SIMPLEX
    while True:
        ___,im=cam.read()
       
        gray =cv2.cvtColor(im,cv2.COLOR_BGR2GRAY)
        faces = facecasCade.detectMultiScale(gray,1.2,5)
        for(x,y,w,h) in faces:
            global Id

            Id,conf=recognizer.predict(gray[y : y+h,x : x+w])
            if conf<70:
                return Id
            else:
                return False


print(modelcal())