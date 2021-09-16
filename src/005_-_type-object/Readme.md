# Type Object

<p>Quando construido um objeto, você tem que declarar o que terá de conteúdo dentro dele, semelhante a uma função com construtor, só que nesse caso você tem que informa qual é a tipagem de cada variavel.</p>
<p>Ao criar um objeto ele não permite criar novas chaves, exceto se você declarar que ira receber novas chaves, como na declaração </p>

```
[key: string]: unknown
```

<p>Lembrando que se tipar a chave dinamica, ele tornara todas as entradas com a mesma tipagem, deixando unknown permitira qualquer tipo de entrada.</p>
