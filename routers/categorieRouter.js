const express=require('express');
const router=express.Router();
const Categorie = require("../models/categorieModel")
const Service = require("../models/serviceModel");


router.get("/",async (req,res)=>{
    try{
        let categorie =await Categorie.find({})
        res.send(categorie)
    }catch(err){
        console.log(err)
    }
})
router.post("/addnomCategorie",async(req,res)=>{
    try{
      const newnomCategorie= new Categorie({
        nomCategorie: req.body.nomCategorie,
        image:req.body.image
      })
       await newnomCategorie.save()
       res.send(newnomCategorie)      
       console.log("saved!!")
    }
    catch(err){
        console.log(err)
    }
})

// Route pour récupérer tous les services d'une catégorie
router.get('/:id/services', async (req, res) => {
    try {
      const categoryId = req.params.id;
  
      // Vérifier si l'ID de la catégorie est défini
      if (!categoryId) {
        return res.status(400).json({ message: 'ID de catégorie non spécifié' });
      }
  
      const categorie = await Categorie.findById(categoryId);
  
      if (!categorie) {
        return res.status(404).json({ message: 'Catégorie non trouvée' });
      }
  
      const services = categorie.services;
      res.json(services);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Erreur lors de la récupération des services' });
    }
  });
router.post('/:id/services', async (req, res) => {
    try {
      const categorie = await Categorie.findById(req.params.id);
      if (!categorie) {
        return res.status(404).json({ message: 'Categorie non trouvée' });
      }
  
      // Créer le service
      const service = {
        nomService: req.body.nomService,
        description: req.body.description,
        
        // Autres propriétés du service
      };
  
      // Ajouter le service à la catégorie
      categorie.services.push(service);
      await categorie.save();
  
      res.status(201).json(categorie);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Erreur lors de l\'ajout du service' });
    }
  });
router.put("/updateService/:id",async (req,res)=>{
    try{
        
        let updateService= await Service.findOneAndUpdate({_id:req.params.id},
            {
                 nomService: req.body.nomService,
                 description: req.body.description,
                 prix: req.body.prix
            })
            res.send(updateService)  
            console.log("modifier")
      
             
    }catch(err){
        console.log(err)
    }
})
router.get("/:id",async (req,res)=>{
    try{
        let categorie =await Categorie.findOne({_id:req.params.id})
        res.send(categorie)
    }catch(err){
        console.log(err)
    }
})
router.put("/updateCategorie/:id",async (req,res)=>{
    try{
        
        let updateCategorie= await Categorie.findOneAndUpdate({_id:req.params.id},
            {
                nomCategorie: req.body.nomCategorie,
            })
            res.send(updateCategorie)  
            console.log("modifier")
      
             
    }catch(err){
        console.log(err)
    }
});

router.delete('/deleteCategorie/:id', async(req,res)=>{
    try{
        let deleteCategorie = await Categorie.findOneAndRemove({_id:req.params.id})
        res.send(deleteCategorie)
    }
    catch(err){
        res.send(err)
    }  

})

module.exports=router