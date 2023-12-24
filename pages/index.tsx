import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Feliz Cumpleaños!!!!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <img src="/banner.png" alt="" loading='eager' className={styles.banner} />
        <article>
          <p><span style={{ fontSize: 22 }}>Hola papá</span>, supongo que si estás leyendo esto es porque has conseguido escanear el código. Te mando este mensaje porque hoy es un día bastante especial <i>(aunque para ti no lo sea tanto)</i> y quería decirte algo.</p>
          <p>
            Tenía muchas ganas de que llegará este día para escribirte esto, aun que sé que puedo hacerlo siempre, que mejor que hacerlo el día de tu cumpleaños.</p>
          <p>
            Primero quiero darte las gracias, quizá dirás: <i>Gracias, ¿por qué?</i> Gracias por <b>enseñarme</b> todo lo que sé, por <b>ayudarme</b> a descubrir quién soy y por <b>apoyarme</b> en todas las decisiones que tomo día a día, que aunque no te gusten mucho siempre haces lo posible por entenderlas o por <b>aconsejarme</b> de una mejor manera. <b>Gracias por estar presente</b> en mi vida desde que soy pequeña y ayudarme cuando era necesario, por enseñarme a confiar en mí misma como tú lo haces y por guiarme siempre en mi camino.
            Hoy cumples 50 años y quería dedicarte estas palabras, porque bien tú sabes que no siempre estoy dispuesta a decirte todo lo que siento. Así que, cómo no, recordarte lo mucho que te quiero y que eres de lo mejor que podia pasarme. Que aunque muchas veces no nos entendamos y tengamos nuestras discusiones de padre e hija valoro cada uno de tus esfuerzos por darme siempre lo mejor, sé que ser padre es difícil, y por eso no te juzgo, ya que se que siempre haces y harás todo lo posible para que yo este bien. <i>Aunque a veces te equivoques.</i>
          </p>
          <img src="/hola.jpg" alt="Neisita" className={styles.img} />
          <p>
            Sé que a veces no valoro cuánto haces por mí. Ha habido momentos en los que no me he dado cuenta de que estabas ahi para mi y de que tenia tu cariño siempre, pero ahora no tengo duda de eso, de cuanto significas para mí, de lo importante que eres en mi vida y de lo dificil que seria si no estuvieses aquí.
            Y ahora solo queda felicitarte, y no solo porque sea tu cumpleaños, si no por todas esas veces que la vida se te echaba encima, pero tú, como padre y como persona nunca has tirado la toalla. Felicitarte por todo lo que has conseguido en esta vida tu solo, y lo que aún te queda! A veces incluso desearía que todo el mundo tuviese la oportunidad de tener un padre como tú, para que vean uno de los motivos de mi felicidad. Porque para mí, tener un padre como tú es una bendición para toda la vida, es tener la certeza y la seguridad de que siempre estarás ahí apoyandome y de que puedo confiar en ti.
          </p>
          <h2>
            Gracias papá.
          </h2>
          <p>
            Hoy, un día más, me siento muy feliz de tenerte un año más aquí, de poder seguir aprendiendo de ti, y porque lo vamos a celebrar por todo lo alto!
            Ojalá que continues teniendo esta vida tan bonita que te ha dado el universo y que sigas dedicandote a aquello que más amas, y que cada vez tenfas mas tiempo libre para otra cosa que adoras, pasar tiempo con tu familia.
          </p>
          <h1>Te quiero y siempre te querré.</h1>
        </article>
      </main >
    </>
  )
}
