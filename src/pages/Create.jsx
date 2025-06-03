import { useContext } from "react";
import { Form, useForm } from "react-hook-form"
import { useFieldArray } from "react-hook-form";
import { recipeContext } from "../context/Recipecontext";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router";

const Create = () => {

    let navigate = useNavigate()

    const { register, handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      title: '',
      description: '',
      image: '',
      servings: '',
      prepTime: '',
      cookTime: '',
      totalTime: '',
      ingredients: [''],
      instructions: [''],
      nutrition: {
        calories: '',
        protein: '',
        fat: '',
        carbohydrates: '',
      },
    },
  });

    const { fields: ingredients, append: addIngredient, remove: removeIngredient } = useFieldArray({
        control,
        name: 'ingredients',
    });

    const { fields: instructions, append: addInstruction, remove: removeInstruction } = useFieldArray({
        control,
        name: 'instructions',
    });

    let {data,setData} = useContext(recipeContext)
    const onSubmit = (formData) => {
        let id = nanoid()
        formData.id = id
        setData([...data,formData])
        navigate('/recipe')
    }

    return (
        <div className="recipe-form-wrapper">
            <form onSubmit={handleSubmit(onSubmit)} className="recipe-form">
                <input 
                    {...register('title', { required: 'Title is required' })} 
                    placeholder="Title" 
                />
                {errors.title && <p className="error">{errors.title.message}</p>}

                <textarea 
                    {...register('description', { required: 'Description is required' })} 
                    placeholder="Description" 
                />
                {errors.description && <p className="error">{errors.description.message}</p>}

                <input 
                    {...register('image', {
                    // required: 'Image URL is required',
                    // pattern: {
                    //     value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i,
                    //     message: 'Enter a valid image URL'
                    // }
                    })} 
                    placeholder="Image URL" 
                />
                {errors.image && <p className="error">{errors.image.message}</p>}

                <div className="form-grid">
                    <input 
                    {...register('servings', { 
                        required: 'Servings is required', 
                        min: { value: 1, message: 'Must be at least 1' }, 
                        valueAsNumber: true 
                    })} 
                    placeholder="Servings" 
                    type="number"
                    />
                    {errors.servings && <p className="error">{errors.servings.message}</p>}

                    <input 
                    {...register('prepTime', { required: 'Prep time is required' })} 
                    placeholder="Prep Time" 
                    />
                    {errors.prepTime && <p className="error">{errors.prepTime.message}</p>}

                    <input 
                    {...register('cookTime', { required: 'Cook time is required' })} 
                    placeholder="Cook Time" 
                    />
                    {errors.cookTime && <p className="error">{errors.cookTime.message}</p>}

                    <input 
                    {...register('totalTime', { required: 'Total time is required' })} 
                    placeholder="Total Time" 
                    />
                    {errors.totalTime && <p className="error">{errors.totalTime.message}</p>}
                </div>

                <div className="section">
                    <h3>Ingredients</h3>
                    {ingredients.map((item, index) => (
                    <div key={item.id} className="dynamic-field">
                        <input
                        {...register(`ingredients.${index}`, { required: 'Ingredient is required' })}
                        placeholder={`Ingredient ${index + 1}`}
                        />
                        {errors.ingredients?.[index] && (
                        <p className="error">{errors.ingredients[index]?.message}</p>
                        )}
                        <button type="button" onClick={() => removeIngredient(index)}>Remove</button>
                    </div>
                    ))}
                    <button style={{cursor:"pointer"}} type="button" onClick={() => addIngredient('')}>+ Add Ingredient</button>
                </div>

                <div className="section">
                    <h3>Instructions</h3>
                    {instructions.map((item, index) => (
                    <div key={item.id} className="dynamic-field">
                        <input
                        {...register(`instructions.${index}`, { required: 'Step is required' })}
                        placeholder={`Step ${index + 1}`}
                        />
                        {errors.instructions?.[index] && (
                        <p className="error">{errors.instructions[index]?.message}</p>
                        )}
                        <button type="button" onClick={() => removeInstruction(index)}>Remove</button>
                    </div>
                    ))}
                    <button style={{cursor:"pointer"}} type="button" onClick={() => addInstruction('')}>+ Add Step</button>
                </div>

                <div className="section">
                    <h3>Nutrition (per serving)</h3>
                    <input {...register('nutrition.calories')} placeholder="Calories" type="number" />
                    <input {...register('nutrition.protein')} placeholder="Protein" type="number" />
                    <input {...register('nutrition.fat')} placeholder="Fat" type="number" />
                    <input {...register('nutrition.carbohydrates')} placeholder="Carbohydrates" type="number" />
                </div>

                <button type="submit" className="submit-btn">Submit Recipe</button>
            </form>
        </div>
    )
}

export default Create