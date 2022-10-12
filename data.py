import pip._vendor.requests 

while True:
    requisicao = pip._vendor.requests.get("http://localhost:3000/data")
    values = requisicao.json()
    valor1 = values["num"]
    print(valor1)