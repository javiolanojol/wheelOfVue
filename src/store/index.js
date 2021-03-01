import { createStore } from 'vuex'

export default createStore({
  state: {
    listado : ["Ezekiel","Javi","Silvia","Pablo","CrisM1","Iñigo","Abraham","Arturo","CrisM2",
      "Paula","Angel","Clara","Edu","Luis","Jaime","Carla","Jairo","Julian", "Juancar","Hector"]
  },
  mutations: {

    mutationKill(state,payload){
      if(state.listado.length>0){
        const muerto = state.listado.splice(payload,1);
        console.log(muerto[0]);
      }
    }

  },
  actions: {
    actionKill({commit,state}){

      const corpse = Math.floor(Math.random()*(state.listado.length));
      commit('mutationKill',corpse)
    }

  },
  modules: {
  }
})
