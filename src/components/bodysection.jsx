import React, { Component } from 'react';
import '../styles/bodysection.css';
import Element from './element';
import About from './About';
import DataSh from './dataSh'

class Bodysection extends Component {
    constructor(props) {
        super(props);
        this.slt = Object.keys(DataSh);
        this.state = { 
            links: [...DataSh[this.slt[0]]],
            Ntables: DataSh[this.slt[0]].length, urlPics: [...DataSh[this.slt[3]]],infos:'ra'};
        
        this.fillList=this.fillList.bind(this);
        
    }
   componentWillMount(){
       /* this.dataS= */
   }

    fillList(event){
        /* console.log(event.target); */
        /* console.log(DataSh[event.target.value]); */
        let lLinks = [...DataSh[event.target.value]];
        /* console.log(event.target.value+'P'); */
        let urPics = [...DataSh[event.target.value + 'P']];
         /* console.log(lLinks+"gg"+urPics); */
        this.setState({ links: lLinks, Ntables: lLinks.length, urlPics: urPics});
      
    }

    render() {
         let pages=[];
        let listSelect=this.slt.slice(0,3);
        console.log(Object.keys(DataSh));

        for(let i=0;i<this.state.Ntables;i++){
            pages.push(<Element url={this.state.links[i][0]}  data={this.state.links[i][1]}  pict={this.state.urlPics[i]} />);
        }
        
        pages=pages.map(e=>e);
         /* console.log(pages); */
        return (
            <div className="bodywrap">
             <img id="bgsec" src={require('../ress/img/b9.jpg')} alt=""/>
            <div  id="bsearch">
                <h1>Set Of Field I Am Familiar With:</h1>
                   
                    
                <select  id="selectItem" onChange={this.fillList} >
                        {listSelect.map(pop => <option value={pop}>{pop}</option>)}
                </select>
            </div>

 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
            <section id="showing">        
            {pages}
            </section>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
           <About />
            </div>  
            
        );
    }
}

export default Bodysection;