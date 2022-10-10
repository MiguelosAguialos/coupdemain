function adicionar(){
    user.num +=1
    fs.writeFileSync('./user.json', JSON.stringify(user, null, 2), 'utf-8');
    console.log(user)
}