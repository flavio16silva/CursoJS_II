//STRING
 //Tipo Primitivo
 const mensagem = 'minha primeira mensagem'

 //Tipo Objeto
 const outraMensagem = new String('Bom dia!')

 //Ao usar o . no console no navegador com as strings acima, o JS irá encapsular esse tipo primitivo, permitindo você usar ele como objeto.

 /*
 == Tamanho do Objeto ===
outraMensagem.length
8

=== Tipo da Mensagem ===
outraMensagem
String {'Bom dia!'}

== Procurando pelo indice ===
outraMensagem[4]
'd'

outraMensagem[3]
' '
outraMensagem[6]
'a'
 
== Palavras incluidas na String ===
mensagem.includes('primeira')
true
mensagem.includes('azul')
false 

== Inicio da Mensagem ==
mensagem.startsWith('minha')
true

== Termino da Mensagem ==
mensagem.endsWith('minha')
false


== Indice da Palavra ==
mensagem.indexOf('primeira')
6

== Alterando a Palavra ==
mensagem.replace('minha','nossa')
'nossa primeira mensagem'

== Removendo os espaços excedentes no inicio ou no final ==
mensagem.trim()
'minha primeira mensagem'
 
 */
