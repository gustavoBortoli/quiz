<template>
    <v-container class="py-10">
      <v-row style="height: 500px">
        <v-col md="12" style="display: flex; flex-direction: row;">         
            <v-card max-width="400" class="mx-2">
                <v-img
                lazy-src="@/assets/ms-logo.jpg"
                height="200"
                src="@/assets/ms-logo.jpg"></v-img>
                <v-card-title>Microsoft</v-card-title>
                <v-card-text >
                    A Microsoft foi fundada por Bill Gates e Paul Allen em 4 de abril de 1975 para desenvolver e vender interpretadores BASIC para o Altair 8800.
    A empresa posteriormente iria dominar o mercado de sistemas operacionais de computadores pessoais com o MS-DOS.
    Atualmente desenvolve, fabrica, licencia, apoia e vende softwares de computador, produtos eletrônicos, computadores e serviços pessoais.
                </v-card-text>
            </v-card>
            <v-card max-width="400" class="mx-2">
                <v-img
                lazy-src="@/assets/alphabet.jpg"
                height="200"
                src="@/assets/alphabet.jpg"></v-img>
                <v-card-title>AlphaBet</v-card-title>
                <v-card-text >
                    AlphaBet é um conglomerado de empresas, entre elas, está o Google. Sediada na California, EUA, fundada pelos mesmos fundadores do Google.
Foi criada para expandir a área de atuação do Google, sem precisar atrelar tudo ao Google. Nome escolhido por denominar todas as letras de uma linguagem.
                </v-card-text>
            </v-card>
            <v-card max-width="800" class="mx-2">
                <v-img
                lazy-src="@/assets/hack.jpg"
                height="200"
                src="@/assets/hack.jpg"></v-img>
                <v-card-title>Linguagem Hack</v-card-title>
                <v-card-text >
                    Facebook criou uma linguagem de programação, conhecida como Hack, lançada em março de 2014.
Antes do anúncio público da nova linguagem de programação, o Facebook já havia implementado e testado a linguagem em uma grande parte de seu website.
Hack possui código aberto, e foi criada especialmente para desenvolvimento web,
Hack permite que programadores usem tipagem estática e tipagem dinâmica. Este sistema de tipos é chamado de tipagem gradual,
que também é implementado em outras linguagens como ActionScript.
Hack estende a indução de tipo, disponível no PHP 5, introduzindo a tipagem estática, adicionando novos tipos (para tipos escalares como
inteiros e strings, por exemplo) e estendendo o uso da indução de tipos (para propriedades de classe ou valores de retorno de função, por exemplo).

&lt;?hh echo 'Olá Mundo';
                </v-card-text>
            </v-card>
        </v-col> 
      </v-row>
      <v-row>
        <v-col md="12" style="display: flex; flex-direction: row;">      
            <v-card  max-width="400" class="mx-2">
                <v-img
                lazy-src="@/assets/jeff-bezos.jpg"
                height="200"
                src="@/assets/jeff-bezos.jpg"></v-img>
                <v-card-title>Jeff Bezos</v-card-title>
                <v-card-text >
                    Jeff Bezos, criador da Amazon, desde novo teve uma paixão pelo espaço, e com isso fundou a Blue Origin uma empresa privada de astronáutica,
com foco principal em turismo espacial, desenvolvendo naves espaciais numa tentativa de baixar bastante o custo de ir ao espaço e tornar algo que
pessoas comuns que tem esse mesmo sonham, possam fazer uma viagem sub-orbital para ver a Terra e o Espaço.
                </v-card-text>
            </v-card>
            <v-card max-width="1600" class="ml-2" style="display: flex; flex-direction: row;">
                <v-card max-width="400" elevation="0" style="border: 0px !important;">
                    <v-img
                    lazy-src="@/assets/elon-musk.jpg"
                    height="200"
                    src="@/assets/elon-musk.jpg"></v-img>
                    <v-card-title>Elon Musk</v-card-title>
                    <v-card-text >
                        O empresário sul-africano Elon musk, um dos homens mais ricos do mundo, um gênio, bilionário, playboy, filantropo é dono de também a
    SpaceX, uma empresa espacial, com objetivo de colonizar Marte, SolarCity, fabricante de tecnologias para energia solar,
    The Boring Company e Neuralink.
                    </v-card-text>
                </v-card>
                <v-divider vertical class="mx-4"></v-divider>
                <v-card max-width="600" elevation="0" style="border: 0px !important;">
                    <v-card-text class="pb-0 pl-0">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/rV992IRaCMk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </v-card-text>
                    <v-card-title class="pt-0 pl-0">SpaceEx: Lançamento do primeiro foguete privado tripulado</v-card-title>
                </v-card>
            </v-card>
        </v-col> 
      </v-row>
    </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>