import axios from 'axios'

export default {
	state:{
		classes:[]
	},
	getters:{
		classes:state=>state.classes
	},
	mutations:{
		alterClasses:(state,data)=>{
			state.classes = data;
		}
	},
	actions:{
		findAllClasses:(context)=>{
			axios.get('http://192.168.25.133:3000/clazz/findAll').then(function({data}){
				context.commit('alterClasses',data)
			})
		}
	}
}