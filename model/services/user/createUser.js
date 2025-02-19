const { getClientDatabaseConnection } = require("../../connection")
const userSchema = require("../../userSchema")
<<<<<<< HEAD
const { firstNameValidation, lastNameValidation, emailValidation, phoneNumberValidation, genderValidation, ageValidation, bloodGroupValidation, cityValidation, stateValidation, countryValidation, zipCodeValidation } = require("../validation/validation")
=======
const { firstNameValidation, lastNameValidation, emailValidation, phoneNumberValidation, passwordValidation, genderValidation, ageValidation, bloodGroupValidation, cityValidation, stateValidation, countryValidation, zipCodeValidation, clientIdValidation } = require("../validation/validation")
>>>>>>> origin/new_pragya
const getserialNumber = require("../../serialNumber.jss/getSerialNumber")

const createUser = async ({ firstName, lastName, profileImage="https://demo.jpg", email, phone, gender, age, bloodGroup, city, state, country, ZipCode, address="address",clientId })=>{
    try {
        // console.log(firstName, lastName, profileImage, companyId, email, phone, password, gender, age, bloodGroup, city, state, country, ZipCode, address,typeof(clientId));
        console.log(clientId);
        
        if(!clientId) return {status:false,message:'Some network credential are missing '}

<<<<<<< HEAD
        //all validations
        firstNameValidation(firstName);
        lastNameValidation(lastName);
        emailValidation(email);
        phoneNumberValidation(phone);
        genderValidation(gender);
        ageValidation(age);
        bloodGroupValidation(bloodGroup);
        cityValidation(city);
        stateValidation(state);
        countryValidation(country);
        zipCodeValidation(ZipCode);
=======
        const validations = [
            firstNameValidation({firstName}),
            lastNameValidation({lastName}),
            emailValidation({email}),
            phoneNumberValidation({phone}),
            passwordValidation({password}),
            genderValidation({gender}),
            ageValidation({age}),
            bloodGroupValidation({bloodGroup}),
            cityValidation({city}),
            stateValidation({state}),
            countryValidation({country}),
            zipCodeValidation({ZipCode}), 
            clientIdValidation({clientId})
>>>>>>> origin/new_pragya

        //establishing connection to database
        const db =await getClientDatabaseConnection(clientId);
        const User =await db.model('user',userSchema);

<<<<<<< HEAD
        //generating diplay id
        const displayId = await getserialNumber("User", clientId, "");

        //creating a new object to save
=======
        //check the validation error

        console.log(validations,'');
        
        const error = validations.find(validate => validate !== undefined)
        console.log(error,'->error');
        
        if(error) return error

        const db =await getClientDatabaseConnection(clientId)
        const User =await db.model('user',userSchema)

        const alreadyExists = await User.findOne({email})

        if(alreadyExists){
            return {status: false, message: "User already exists with this email"}
        }

        const displayId = Math.abs(await getserialNumber("user", clientId , ""))
>>>>>>> origin/new_pragya
        const user = new User({
            displayId,
            firstName,
            lastName,
            profileImage,
            email,
            phone,
<<<<<<< HEAD
            gender,
            age,
            bloodGroup,
            city,
            state,
            country,
            ZipCode,
            address
        })

        //saving the object
        // await user.save();
        const result = await user.save();
        return {status:true,message:'User created successFully',data:{_id:result?._id}};
=======
            password, 
            gender, 
            age, 
            bloodGroup, 
            city, 
            state, 
            country, 
            ZipCode, 
            address,
            // clientId
        })
        console.log("user logged:",user);
        
        const result = await user.save()
        console.log("user save result:", result);
        
        return {status:true,message:'User created successfully', data:{_id:result._id}}

        
>>>>>>> origin/new_pragya
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = createUser;
