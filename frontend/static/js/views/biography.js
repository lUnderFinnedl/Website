import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("biography");
    }

    async getHtml() {
        return `
        <p id="bio-general">
        <p id = "biography_title">Who was Stephen Hawking</p>
        Stephen William Hawking (8 January 1942 – 14 March 2018) was an English theoretical physicist, cosmologist, and author who, at the time of his death,
        was director of research at the Centre for Theoretical Cosmology at the University of Cambridge. Between 1979 and 2009, he was the Lucasian Professor of Mathematics
        at the University of Cambridge, widely viewed as one of the most prestigious academic posts in the world.
        Hawking was born in Oxford into a family of physicians. In October 1959, at the age of 17, he began his university education at University College, Oxford, 
        where he received a first-class BA degree in physics. In October 1962, he began his graduate work at Trinity Hall at the University of Cambridge where, in March 1966, 
        he obtained his PhD degree in applied mathematics and theoretical physics, specialising in general relativity and cosmology. In 1963, at age 21, Hawking was diagnosed with 
        an early-onset slow-progressing form of motor neurone disease that gradually, over decades, paralysed him. After the loss of his speech, 
        he communicated through a speech-generating device initially through use of a handheld switch, and eventually by using a single cheek muscle.
        Hawking's scientific works included a collaboration with Roger Penrose on gravitational singularity theorems in the framework of general relativity, and the theoretical 
        prediction that black holes emit radiation, often called Hawking radiation. Initially, Hawking radiation was controversial. By the late 1970s and following the publication 
        of further research, the discovery was widely accepted as a major breakthrough in theoretical physics. Hawking was the first to set out a theory of cosmology explained by a 
        union of the general theory of relativity and quantum mechanics. He was a vigorous supporter of the many-worlds interpretation of quantum mechanics.
        Hawking achieved commercial success with several works of popular science in which he discussed his theories and cosmology in general. His book A Brief History of Time 
        appeared on the Sunday Times bestseller list for a record-breaking 237 weeks. Hawking was a Fellow of the Royal Society, a lifetime member of the Pontifical Academy of Sciences, 
        and a recipient of the Presidential Medal of Freedom, the highest civilian award in the United States. In 2002, Hawking was ranked number 25 in the BBC's poll of the 100 Greatest Britons. 
        He died in 2018 at the age of 76, after living with motor neurone disease for more than 50 years.
        </p>
        <p id="bio-career">
        <h1>His work</h1>
        Hawking worked primarily in the field of general relativity and particularly on the physics of black holes. In 1971 he suggested the formation, following the big bang, of numerous objects 
        containing as much as one billion tons of mass but occupying only the space of a proton. These objects, called mini black holes, are unique in that their immense mass and gravity require 
        that they be ruled by the laws of relativity, while their minute size requires that the laws of quantum mechanics apply to them also. In 1974 Hawking proposed that, in accordance with the 
        predictions of quantum theory, black holes emit subatomic particles until they exhaust their energy and finally explode.
        Hawking’s work greatly spurred efforts to theoretically delineate the properties of black holes, objects about which it was previously thought 
        that nothing could be known. His work was also important because it showed these properties’ relationship to the laws of classical thermodynamics and quantum mechanics.
        Hawking’s contributions to physics earned him many exceptional honours. In 1974 the Royal Society elected him one of its youngest fellows. He became professor of gravitational 
        physics at Cambridge in 1977, and in 1979 he was appointed to Cambridge’s Lucasian professorship of mathematics, a post once held by Isaac Newton. Hawking was made a Commander 
        of the Order of the British Empire (CBE) in 1982 and a Companion of Honour in 1989. He also received the Copley Medal from the Royal Society in 2006 and the U.S. Presidential 
        Medal of Freedom in 2009. In 2008 he accepted a visiting research chair at the Perimeter Institute for Theoretical Physics in Waterloo, Ontario, Canada.
        His publications included The Large Scale Structure of Space-Time (1973; coauthored with G.F.R. Ellis), Superspace and Supergravity (1981), The Very Early Universe (1983), 
        and the best sellers A Brief History of Time: From the Big Bang to Black Holes (1988), The Universe in a Nutshell (2001), A Briefer History of Time (2005), and The Grand Design (2010; coauthored with Leonard Mlodinow).
            <p>
            <a href="/works" data-link>View recent works</a>
            </p>
        </p>
        <p id="bio-awards">
        <h1>Awards</h1>
        Professor Stephen Hawking received thirteen honorary degrees. He was awarded CBE (1982), Companion of Honour (1989) and the Presidential Medal of Freedom (2009). 
        He was the recipient of many awards, medals and prizes, most notably the Fundamental Physics prize (2013), Copley Medal (2006) and the Wolf Foundation prize (1988). 
        He was a Fellow of the Royal Society and a member of the US National Academy of Sciences and the Pontifical Academy of Sciences.
        Hawking received numerous awards and honours. Already early in the list, in 1974 he was elected a Fellow of the Royal Society (FRS). At that time, his nomination read:
        Hawking has made major contributions to the field of general relativity. These derive from a deep understanding of what is relevant to physics and astronomy, and especially 
        from a mastery of wholly new mathematical techniques. Following the pioneering work of Penrose he established, partly alone and partly in collaboration with Penrose, a series 
        of successively stronger theorems establishing the fundamental result that all realistic cosmological models must possess singularities. Using similar techniques, Hawking has 
        proved the basic theorems on the laws governing black holes: that stationary solutions of Einstein’s equations with smooth event horizons must necessarily be axisymmetric; and that 
        in the evolution and interaction of black holes, the total surface area of the event horizons must increase. In collaboration with G. Ellis, Hawking is the author of an impressive 
        and original treatise on “Space-time in the Large”.
        The citation continues:
        Other important work by Hawking relates to the interpretation of cosmological observations and to the design of gravitational wave detectors.
        Hawking received the 2015 BBVA Foundation Frontiers of Knowledge Award in Basic Sciences shared with Viatcheslav Mukhanov for discovering that 
        the galaxies were formed from quantum fluctuations in the early Universe. At the 2016 Pride of Britain Awards, Hawking received the lifetime achievement 
        award “for his contribution to science and British culture”. After receiving the award from Prime Minister Theresa May, Hawking humorously requested that 
        she not seek his help with Brexit.
        </p>
        `;
    }
}
