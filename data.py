import pip._vendor.requests 

requisicao = pip._vendor.requests.get("http://localhost:3000/")
print(requisicao.json())