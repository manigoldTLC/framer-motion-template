import React from 'react'


import { RightItens, LeftItens, Span } from './styles'
import logo from '../../../assets/images/logo.png'

const HeaderItens: React.FC = () => {
    return (
        <>
            <LeftItens>
                <div className="logo-container">
                    <img src={ logo } alt="logo" />
                </div>
                <span style={{color: '#f5f5f7',}}>Gabriel Xavier</span>
            </LeftItens>

            <RightItens>
                <ul>
                    <li>
                        <Span>
                            Habilidades
                        </Span>
                    </li>

                    <li>
                        <Span>
                            Ver mais
                        </Span>
                    </li>
                </ul>
            </RightItens>
        </>
    );
}

export default HeaderItens;
