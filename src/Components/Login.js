import {Component} from "react"
import { Link } from "react-router-dom"
class Login extends Component{
    constructor(){
        super()
        this.state = {
            name:"Login"
        }
    }
    user = {}

    handleEmail = (event)=>{
        this.user.email = event.target.value
      }
    handlePassword = (event)=>{
         this.user.password = event.target.value
       }
    login = (event)=>{
        this.setState({
            errorMessage:"Invalid Credentials"
        })
       event.preventDefault()
    }

    render(){
        return (
            <div className="container mt-5">
                <form className="w-50 m-auto">
                    <h1>Login Here</h1>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input onChange={this.handleEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small className="text-danger">{this.state.errorMessage}</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input onChange={this.handlePassword} type="password" class="form-control"  placeholder="Password" />
                        <small className="text-danger">{this.state.errorMessage}</small>
                    </div>
                    <button onClick={this.login} type="submit" class="btn btn-primary">Submit</button>
                    <p className="mt-3 text-center"><small>If you don't have account <Link to="/signup">Signup Here</Link></small></p>
                </form>
            </div>
        )
    }
}

export default Login