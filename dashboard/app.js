class Nav extends React.Component {
    render() {
        return ( 
            <div id = "navDiv" >
            <ul>
            <li> Dashboard </li> 
            <li> Widget </li> 
            <li> Reviews </li> <
            li > Customers </li> <
            li > Online Analysis </li> <
            li > Settings </li> </ul >
            </div>
        )
    }
}


class Reviews extends React.Component {
    render() {
        return ( 
        <div className = "reviewsDiv" >
            <h3> Reviews </h3> 
            <p> 1281 </p> 
            </div>
        )
    }
}

class Average extends React.Component {
    render() {
        return ( 
        <div className = "reviewsDiv" >
            <h3> Average Rating </h3> 
            <p> 4.6 </p> 
            </div>
        )
    }
}

class Sentiment extends React.Component {
    render() {
        return ( 
        <div className = "reviewsDiv" >
            <h3> Sentiment Analysis </h3> 
            <p> 960 </p> 
            <br></br>
            <p> 122 </p> 
            <br></br>
            <p> 321 </p> 
            </div>
        )
    }
}

class Darkbox extends React.Component {
    render() {
        return ( 
            <div className = "darkboxDiv" >
            </div>
        )
    }
}

class Visit extends React.Component {
    render() {
        return ( 
            <div className = "visitDiv">
            <h3> Website Visitors </h3> 
            <p> 821 </p>  
            <Darkbox/>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return ( 
            <div>
            <Nav/>
            <Reviews/>
            <Average/>
            <Sentiment/>
            <Visit/>
            </div>
        )
    }
}

ReactDOM.render( < App / > , document.querySelector(".container"));