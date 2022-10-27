
import { ICard } from "../models/interface";

export function Card({
    name,
    family,
    age,
    status,
    message,
    imageURL,
    kingdomYear,
}: ICard) {
    return (
        <li className="character col">
            <div className="card character__card">
                <img
                    src={imageURL}
                    alt={name}
                    className="character__picture card-img-top"
                    id={family}
                />
                <div className="card-body">
                    <h2 className="character__name card-title h4">
                        {name} - familia {family}
                    </h2>
                    <div className="character__info">
                        <ul className="list-unstyled">
                            <li>Edad: {age} años</li>
                            <li>
                                Estado:
                                {"" ? (
                                    <i className="fas fa-thumbs-up"></i>
                                ) : (
                                    <i className="fas fa-thumbs-down"> </i>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className="character__overlay">
                        <ul className="list-unstyled">
                            <li>Años de reinado: {kingdomYear} </li>
                        </ul>
                        <div className="character__actions">
                            <button
                                className="character__action btn"
                                
                            >
                                habla
                            </button>
                            <button
                                className="character__action btn"
                                
                            >
                                muere
                            </button>
                        </div>
                    </div>
                </div>
                <i className="emoji">👑</i>
            </div>
            <div className="box__wrapper" id={name}></div>
        </li>
    );
}
