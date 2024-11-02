const Total = ({balance}) => {
    let element;

    if (balance === 0) {
        element = (
            <p className="header__paragraph txt-a--center" id="header-paragraph">
                Bilans wynosi zero
            </p>
        );
    } else if (balance > 0) {
        element = (
            <p className="header__paragraph txt-a--center" id="header-paragraph">
                Możesz jeszcze wydać <span className="paragraph-gradient--income">{balance.toFixed(2).replace(".", ",")}</span> zł.
            </p>
        );
    } else {
        element = (
            <p className="header__paragraph txt-a--center" id="header-paragraph">
                Jesteś na minusie <span className="paragraph-gradient--expense">{balance.toFixed(2).replace(".", ",")}</span> zł.
            </p>
        );
    }

    return element;
};

export default Total;
