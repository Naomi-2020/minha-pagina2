import './App.css'

export default function App() {
  return (
    <div className="container">
      <header>
        <p>Receitas na Net</p>
      </header>

      <main>
        <section className="caixa-titulo">
          <h1>Receitas de Amiga</h1>
          <p>As melhores receitas da internet!</p>
        </section>

        <section className="receitas">
          <h2>Vamos lá!!</h2>

          <div className="box-receita">
            <div className="receita">
              <h3>Como fazer Strogonff de Frango</h3>
              <p>
                Ingredientes: <br />
                500g de frango em cubos
                <br />
                Alho a gosto
                <br />
                Sal a gosto
                <br />
                1 cebola picada
                <br />
                2 cremes de leite
                <br />
                1/2 sache de molho de tomate
                <br />
                Páprica picante a gosto
                <br />
                Ketchup a gosto
                <br />
                Mostarda a gosto
                <br />
              </p>
            </div>

            <div className="receita">
              <h3>Modo de preparo:</h3>
              <p2>
                1° passo: Tempere o frango cerca de meia hora antes do preparo,
                normalmente utilizamos sal a gosto, pápica e mostarda.
                <br />
                2° passo: Com a panela no fogo, assim que ela estiver bem quente
                coloque um pouco de óleo ou azeite, como preferir. Em seguida
                jogue o frango já temperado na panela, de maneira que ele fique
                de forma a cubri todo o fundo. A primeiro momento não fique
                mexendo muito, pois queremos que esse frango doure, e deixe
                aquele fundinho na panela.
                <br />
                3° passo: Assim que o frango estiver dourado, reserve-o.
                <br />
                4° passo: Acrescentar a cebola e o alho picado, deixe fritar até
                que doure.
                <br />
                5° Passo: Volte com o frango à panela.
                <br />
                6° passo: Acrescente o Ketchup, a Mostarda e o molho de tomate.
                Deixe apurar os sabores.
                <br />
                7° passo: Verifique o tempero, caso necessite corrija conforme
                seu gosto.
                <br />
                8° Acrescente o creme de leite, misture bem e em seguida
                desligue o fogo, não deixando o creme de leite cozinhar por
                muito tempo.
                <br />
              </p2>
              <p>E já vai estar pronto para comer!</p>
            </div>
          </div>
        </section>

        <footer>
        <p>Criado por Larissa Naomi Muramoto Cardoso</p>
      </footer>
      </main>

      
    </div>
  )
}
