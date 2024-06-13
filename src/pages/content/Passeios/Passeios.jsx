import React, { useState, useContext } from "react";
import Carrousel from "../../../components/Carrousel/Carrousel";
import SectionBase from "../../../components/SectionBase/SectionBase";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { PasseiosSectionStyled } from "./Style";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { TranslationsContext } from "../../../context/TranslationContext";

const PasseiosSection = () => {
    const slides = [
        {
            img: `${process.env.PUBLIC_URL}imagens/passeios/predio-antigo-copacabana.jpg`,
            translations: {
                en: {
                    title: "Lellis Copacabana",
                    description: "The Lellis condominium was built in 1953 (71 years ago) and is located on Rua Barão de Ipanema in the Copacabana neighborhood, in the city of Rio de Janeiro, RJ.",
                },
                pt: {
                    title: "Lellis de Copacabana",
                    description: "O condomínio Lellis foi construído em 1953 (há 71 anos) e está localizado em Rua Barão de Ipanema no bairro de Copacabana",   
                },
                es: {
                    title: "Lellis de Copacabana",
                    description: "El condominio Lellis fue construido en 1953 (hace 71 años) y está ubicado en Rua Barão de Ipanema, en el barrio Copacabana, en la ciudad de Río de Janeiro-RJ.",
                },
                fr: {
                    title: "Lellis de Copacabana",
                    description: "La copropriété Lellis a été construite en 1953 (il y a 71 ans) et est située Rua Barão de Ipanema, dans le quartier de Copacabana, dans la ville de Rio de Janeiro-RJ.",    
                },
                de: {
                    title: "Lellis von Copacabana",
                    description: "Das Lellis-Wohngebäude wurde 1953 erbaut (vor 71 Jahren) und befindet sich in der Rua Barão de Ipanema im Stadtteil Copacabana in der Stadt Rio de Janeiro-RJ.",
                }
            }
        },
        {
            img: `${process.env.PUBLIC_URL}imagens/passeios/castelinho-do-flamengo.jpg`,
            translations: {
                en: {
                    title: "Castelinho of Flamengo",
                    description: "The construction of the Castelinho began in 1916 and was completed in 1918 with the intention of being the official residence of Commander Joaquim da Silva Cardoso, president of the Rio de Janeiro Civil Construction Industry Union."
                },
                pt: {
                    title: "Castelinho do Flamengo",
                    description: "As obras do Castelinho tiveram início em 1916 e foram finalizadas em 1918 no intuito de ser a residência oficial do Comendador Joaquim da Silva Cardoso, presidente do Sindicato da Indústria da Construção Civil do Rio de Janeiro"
                },
                es: {
                    title: "Castelinho de Flamengo",
                    description: "Las obras del Castelinho comenzaron en 1916 y se finalizaron en 1918 con la intención de ser la residencia oficial del Comendador Joaquim da Silva Cardoso, presidente del Sindicato de la Industria de la Construcción Civil de Río de Janeiro."
                },
                fr: {
                    title: "Castelinho de Flamengo",
                    description: "Les travaux du Castelinho ont commencé en 1916 et ont été achevés en 1918 dans le but d'être la résidence officielle du Commandeur Joaquim da Silva Cardoso, président du Syndicat de l'industrie de la construction civile de Rio de Janeiro."
                },
                de: {
                    title: "Castelinho von Flamengo",
                    description: "Die Bauarbeiten des Castelinho begannen 1916 und wurden 1918 abgeschlossen, um die offizielle Residenz von Comendador Joaquim da Silva Cardoso, dem Präsidenten des Baugewerbeverbands von Rio de Janeiro, zu sein."
                }
            }
        },
        {
            img: `${process.env.PUBLIC_URL}imagens/passeios/palacete-guinle.jpg`,
            translations: {
                en: {
                    title: "Guinle Mansion",
                    description: "The house is situated at the intersection of São Clemente, Guilhermina Guinle, and Dona Mariana streets, in the Botafogo neighborhood, on a 6,700 m² lot."
                },
                pt: {
                    title: "Palacete Guinle",
                    description: "A casa está situada na confluência das ruas São Clemente, Guilhermina Guinle e Dona Mariana, no bairro de Botafogo, em um terreno com 6.700 m²."
                },
                es: {
                    title: "Palacete Guinle",
                    description: "La casa está situada en la confluencia de las calles São Clemente, Guilhermina Guinle y Dona Mariana, en el barrio de Botafogo, en un terreno de 6.700 m²."
                },
                fr: {
                    title: "Palais de Guinle",
                    description: "La maison est située à la confluence des rues São Clemente, Guilhermina Guinle et Dona Mariana, dans le quartier de Botafogo, sur un terrain de 6 700 m²."
                },
                de: {
                    title: "Palast von Guinle",
                    description: "Das Haus befindet sich an der Kreuzung der Straßen São Clemente, Guilhermina Guinle und Dona Mariana im Stadtteil Botafogo, auf einem Grundstück von 6.700 m²."
                }
            }
        },
        {
            img: `${process.env.PUBLIC_URL}imagens/passeios/palacete-laranjeiras.jpg`,
            translations: {
                en: {
                    title: "Mansion in Laranjeiras",
                    description: "Mansion from the late 1920s, located at Rua das Laranjeiras, No. 490. For many years, this eclectic Art Deco style residence was owned by a Lebanese family."
                },
                pt: {
                    title: "Palacete em Laranjeiras",
                    description: "Palacete, do final da década de 1920, localizado na Rua das Laranjeiras, nº 490. Por muitos anos, essa residência em estilo art déco eclético foi de uma família libanesa."
                },
                es: {
                    title: "Palacete en Laranjeiras",
                    description: "Palacete de finales de la década de 1920, ubicado en la Rua das Laranjeiras, nº 490. Durante muchos años, esta residencia de estilo art déco ecléctico perteneció a una familia libanesa."
                },
                fr: {
                    title: "Manoir à Laranjeiras",
                    description: "Manoir de la fin des années 1920, situé au Rua das Laranjeiras, n° 490. Pendant de nombreuses années, cette résidence de style art déco éclectique a appartenu à une famille libanaise."
                },
                de: {
                    title: "Palast in Laranjeiras",
                    description: "Palast aus dem Ende der 1920er Jahre, gelegen in der Rua das Laranjeiras, Nr. 490. Viele Jahre lang war diese Residenz im eklektischen Art-Déco-Stil im Besitz einer libanesischen Familie."
                }
            }
        },
    ];

    
const { locale } = useContext(TranslationsContext);

const translations = {
    en: { 
        curta: "Enjoy that taste of everyone's favorite trips!",
    },
    pt: {
        curta: "Curta aquele gostinho dos passeios favoritos da galera!",
    }, 

    es: {
        curta: "¡Disfruta de ese sabor de las salidas favoritas de todos!",
    },

    de: {
        curta: "Genießen Sie diesen Geschmack der Lieblingsausflüge aller!",
    },

    fr: {
        curta: "Profitez de ce goût des sorties préférées de tout le monde !",
    },


    
};

const texts = translations[locale];

    return (
        <SectionBase>
            <PasseiosSectionStyled>
            <h1 className="title">
                {texts.curta}
            </h1>
                <div className="slider">
                    <Carrousel
                        prevButtonLabel={<BsChevronLeft />}
                        nextButtonLabel={<BsChevronRight />}
                        slides={slides}
                    />
                </div>
            </PasseiosSectionStyled>
        </SectionBase>
    );
};

export default PasseiosSection;