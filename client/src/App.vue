<template>
  <v-app>
  
      <v-row align="center" justify="center">

   

      <v-col class="mx-7">
            <h1 v-if="getPosts.length!=0" >Posts</h1>

               <v-card v-if="getPosts.length==0" style="width:50%" >
        <v-card-title>No Todo</v-card-title>
        <v-card-subtitle>No Todo found , Add a Todo</v-card-subtitle>
      </v-card>

    <v-card v-for="(post,key) in getPosts" :key="key" style="width:50%" >

      <v-card-title >{{post.title}}</v-card-title>
      <v-card-subtitle>{{post.postDate}}</v-card-subtitle>
      <v-card-text>{{post.description}}</v-card-text>
      <v-card-actions>
        <v-btn @click="deletePost(post.id)" icon><v-icon color="red">mdi-trash-can-outline</v-icon></v-btn>
      </v-card-actions>

    </v-card>

      </v-col>
    </v-row>

    <v-dialog v-model="dialog" width="50%">
      <v-card>
        <v-sheet><v-card-title>New Todo</v-card-title></v-sheet>
        <v-form class="mx-4">
                <v-text-field placeholder="Todo" v-model="title" ></v-text-field>
           <v-text-field placeholder="Description" v-model="description" ></v-text-field>
           <v-card-actions>
               <v-btn  class="secondary" dark @click="addTodo()">Add</v-btn>
                 <v-btn @click="dialog=false"  class="secondary" dark>Cancel</v-btn>
           </v-card-actions>
        </v-form>
        
    
            
      </v-card>
   
    </v-dialog>

    

 
   <v-btn fab absolute left @click="dialog=true"><v-icon>mdi-plus</v-icon></v-btn>
  </v-app>
</template>

<script>

import axios from 'axios';

export default {
  name: "App",

  components: { 
  },

  data: () => ({
    dialog:false,
    title:'',
    description:''
    
  }),
  mounted(){
    axios.get('http://localhost:3000/')
    .then((data)=>{
      console.log(data.data.recordset)
      this.$store.state.posts = data.data.recordset   
    })
  },
  computed:{
    getPosts(){
      return this.$store.state.posts;
    }
  },
  methods:{
    deletePost(id){
      axios.delete(`http://localhost:3000/${id}/`)
      .then(()=>{
        window.location.reload()
      })

    },
    addTodo(){
      console.log(this.title)
      axios.post('http://localhost:3000/',{title:this.title,description:this.description})
      .then(window.location.reload())
    }
  }
};
</script>
