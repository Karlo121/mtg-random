import blue from '../../media/colors/blue.png';
import white from '../../media/colors/white.png';
import black from '../../media/colors/black.png';
import green from '../../media/colors/green.png';
import red from '../../media/colors/red.png';


export const renderColors = (colors: string[]) => {
     return colors.map(color => {
        if (color === 'blue') {
            return (
                <div className="colorBox">
                    <img src={blue} alt="color" className="icon" />
                </div>
            );
        }
        if (color === 'white') {
            return (
                <div className="colorBox">
                    <img src={white} alt="color" className="icon" />
                </div>
            );
        }
        if (color === 'red') {
            return (
                <div className="colorBox">
                    <img src={red} alt="color" className="icon"/>
                </div>
            );
        }
        if (color === 'black') {
            return (
                <div className="colorBox">
                    <img src={black} alt="color" className="icon" />
                </div>
            );
        }
        if (color === 'green') {
            return (
                <div className="colorBox">
                    <img src={green} alt="color" className="icon" />
                </div>
            );
        }
        else {
            return (
                <div className="colorBox five-color">
                    <img src={green} alt="color" className="icon" />
                    <img src={black} alt="color" className="icon" />
                    <img src={red} alt="color" className="icon"/>
                    <img src={white} alt="color" className="icon" />
                    <img src={blue} alt="color" className="icon" />
                </div>
            );
        }
    });
}