class CheckParagraph{

    get parent(){
        return $('.a.bv.bw.bx.by.ca.er.es.ew.ex.ey');
    }

    get child(){
        return this.parent.$$('p');
    }


    get getTextforparagraph(){
        return this.child.filter(element => {
            console.log(element.getText());
    });
}

}

module.exports = new CheckParagraph();
