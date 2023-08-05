import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  // Propiedades para almacenar los datos ingresados desde el formulario
  datos: any[] = [];
  nombre: string = '';
  apellido: string = '';
  carrera: string = '';
  nivel: string = '';
  email: string = '';

  constructor() {
    // Al iniciar el componente, recuperar los datos almacenados en el localStorage (si los hay)
    const storedData = localStorage.getItem('datos');
    if (storedData) {
      this.datos = JSON.parse(storedData);
    }
  }
  guardarDatos() {
  
    // Agregar los datos ingresados al array "datos"
    this.datos.push({
      nombre: this.nombre,
      apellido: this.apellido,
      carrera: this.carrera,
      nivel: this.nivel,
      email: this.email
    });
    console.log(this.datos);
    
    // Limpiar los campos del formulario
    this.limpiarFormulario();

  }


  

  editarRegistro(index: number) {
    // Obtener los datos del registro a editar
    const registro = this.datos[index];

    // Rellenar el formulario con los datos del registro
    this.nombre = registro.nombre;
    this.apellido = registro.apellido;
    this.carrera = registro.carrera;
    this.nivel = registro.nivel;
    this.email = registro.email;
  }

  eliminarRegistro(index: number) {
    // Eliminar el registro del array "datos"
    this.datos.splice(index, 1);
  }

  private limpiarFormulario() {
    // Limpiar los campos del formulario
    this.nombre = '';
    this.apellido = '';
    this.carrera = '';
    this.nivel = '';
    this.email = '';
  }
}
