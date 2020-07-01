
		<?php  include('includes/header.php') ?>

    <!--VENTANA MODAL DE REGISTRO-->

			<div class="col-md-12 mt-4">
				<div class="container">
					<div class="card card-body">
					<form id="Create" @submit.prevent="CreateMethod">
						<div class="form-group">
								<input placeholder="Ingresa Tu Nombre"type="text" class="form-control" v-model="registros.RegistroNombre">
						</div>
						<div class="form-group">
								<textarea   placeholder="Ingresa Tu Apellido" class="form-control" v-model="registros.RegistroApellido"></textarea>
						</div>
						<div class="form-group">
							<button type="submit" class="btn btn-success btn-block text-uppercase">Guardar</button>
						</div>
					</form>
				</div>
			</div>
		</div>




    <div>
      <div class="container">
				<div class="col-md-12 mt-4">
								<div id="Read">
										<template v-if="!empty">
											<table class="table table-bordered">
												<thead>
													<tr>
														<th>ID</th>
														<th>Nombre</th>
														<th>Apellido</th>
														<th>Accion</th>
													</tr>
												</thead>
												<tbody>
													<tr v-for="registro in registros">
														<td > {{ registro.RegistroID }}</td>
														<td > {{ registro.RegistroNombre }}</td>
														<td > {{ registro.RegistroApellido }}</td>
														<td class="text-white">
															<a class="btn btn-info" button v-on:click="GetById(registro.RegistroID)"><i class="fas fa-edit "></i></a>
															<a class="btn btn-danger" button v-on:click="Delete(registro.RegistroID)"><i class="fa fa-trash-alt "></i></a>
														</td>
													</tr>
												</tbody>
											</table>
										</template>
									<transition name="fade">
										<template v-if="empty" class="text-center">
												<h4 class="text-center">
													No existen registros almacenados
												</h4>
										</template>
									</transition>
							</div>
					</div>
      </div>
        </div>
    </div>


    <!--Formulario para actualizar-->
    <div class="modal fade" id="UpdateModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Actualizar</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body">
              <form id="Update" @submit.prevent="UpdateMethod">
                <div class="form-group">
                    <label for="RegistroNombre" class="col-form-label">Nombre:</label>
                    <input type="text" class="form-control" v-model="registros.RegistroNombre">
                </div>
                <div class="form-group">
                    <label for="RegistroApellido" class="col-form-label">Apellido:</label>
                    <input type="text" class="form-control" v-model="registros.RegistroApellido">
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-info btn-block">Actualizar</button>
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>


  <?php include('includes/footer.php') ?>
