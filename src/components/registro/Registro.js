import React,{Component} from 'react';
import './Registro.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import Modal from './RecuperarPass'
import NuevoCliente from "./NuevoCliente";
import Menu from '../menu/Menu'
import NavegacionAdmin from "../navBarAdmin/NavegacionAdmin";
import RegistroAdmin from "./RegistroAdmin";
import ReactDOM from 'react-dom';
class Registro extends  Component{
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
          });
        var btnNuevoCliente= document.getElementById('btnNuevoCliente');
        btnNuevoCliente.onclick = function(){
            ReactDOM.render(
                <React.StrictMode>
                    <NuevoCliente />
                </React.StrictMode>,
                document.getElementById('root')
            )
        };
        var varIniciarSesion = document.getElementById('iniciarSesion');
        varIniciarSesion.onclick = function () {
            ReactDOM.render(
                <React.StrictMode>
                    <Menu />
                </React.StrictMode>,
                document.getElementById('root')
            )
        }
        var varRegistroAdmin = document.getElementById('registroAdmin');
        varRegistroAdmin.onclick = function () {
            ReactDOM.render(
                <React.StrictMode>
                    <NavegacionAdmin />
                </React.StrictMode>,
                document.getElementById('navegacion')
            )
            ReactDOM.render(
                <React.StrictMode>
                    <RegistroAdmin />
                </React.StrictMode>,
                document.getElementById('root')
            )

        }
    }
    render() {
        
        return(
            // fondo declarado en inicio.css
            <div className="fondoGG">
            <div className="container">
            <div className="row">
            <div className ="col s12 m6">
                    
                    <div className="cuadradoBlanco">
                        <h5>¡Bienvenido!</h5>
                        <h6>Nuevo Cliente: </h6>
                        <p>
                        Al crear una cuenta en nuestra página web podrás comprar más rápido, guardar tus preferencias y mucho más.
                        <em>¡Registrate y animate!</em> 
                        </p>
                        <a id="btnNuevoCliente" className="btn-floating btn-large green pulse"><i className="material-icons">person_add</i></a>
                    </div>
                </div>
                <div className ="col s12 m6">
                <div className="cuadradoBlanco">
                    <h6>Cliente ya registrado:</h6>
                    <form className="container" >
                     <div className="row">
                        <div className="input-field col s12">
                        <input id="email" type="email" className="validate"/>
                        <label htmlFor="email">Correo: </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input id="password" type="password" className="validate"/>
                        <label htmlFor="password">Contraseña: </label>
                        </div>
                    </div>
           
                    <div className="row">
                        <div className="col s12 m6">
                            <label>
                                <input type="checkbox" />
                                <span>Recordar</span>
                            </label>
                        </div>
                        <div className="col s12 m6">
                            <Modal/>
                        </div>
                        <div className="input-field col s12">
                        <button className="btn waves-effect waves-light pulse" type="submit" name="action" id="iniciarSesion">Iniciar Sesión<i className="material-icons right">send</i>
                        </button>
                        </div>
                        <div className="input-field col s12">
                        <button className="btn waves-effect waves-light pulse" type="submit" name="action" id="registroAdmin">Iniciar Sesión como Admin<i className="material-icons right">send</i>
                        </button>
                        </div>
                        
                    </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        )
    };
}
export default Registro;