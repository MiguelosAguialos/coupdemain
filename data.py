import pip._vendor.requests 

while True:
    requisicao = pip._vendor.requests.get("http://localhost:3000/data")
    values = requisicao.json()
    polegar = values["polegar"]
    indicador = values["indicador"]
    medio = values["medio"]
    anelar = values["anelar"]
    minimo = values["minimo"]
    print(polegar, indicador, medio, anelar, minimo)