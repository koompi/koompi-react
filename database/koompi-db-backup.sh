#!/bin/bash

collections=("categories" "customers" "legals" "members" "pages" "payments" "posts" "retailers" "socialmedias" "users" "amas")

for((i=0; i<${#collections[@]};i++)){
        mongoimport --db koompi-bi --collection ${collections[$i]} --file ${collections[$i]}.json --drop 
        #mongoexport -h ds037571.mlab.com:37571 -d koompi-bi -c ${collections[$i]} -u "san-vuthy" -p "vuthy1997*" -o ${collections[$i]}.json
        # mongoexport --uri="mongodb://koompiBi:GCMCQYBGBD5MOZK6LHSL5SFTSGLM75SJTSVZAANP2P4UCYUTRXT5FZUI@13.229.154.169:27017/koompi-bi" --collection ${collections[$i]} --o$
}
