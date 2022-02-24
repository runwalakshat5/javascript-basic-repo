/*
   ** Error Handling
*/

try {
    // code throws error
} catch (ex) {
    //code be executed if an error occurs
} finally {
    // code to be executed regardless of an error occurs or not
}

try {
    var output = getMessage("Hello", "Uma")
} catch (ex) {
    console.log(ex.message)
    console.log("This is catch block.")
} finally {
    console.log('This is will get executed always')
}


try {
    var output = "Welcome to Try catch"
    console.log(output)
} catch (ex) {
    console.log(ex.message)
} finally {
    console.log('This is will get executed always')
}

try {
    throw "Error Occured"
} catch(ex){
    console.log(ex)
}

// getStudentDetails(Id) // getting two students

try {
    var errorInfo = {
        number: 101,
        message: 'Duplicate Students showing up for the same ID'
    }
    throw errorInfo
} catch (ex){
    console.log(ex)
}

// only try and finally
 try {
    console.log('Try can have only finally block')
} finally {
    console.log('Finally block confirms that statement')
}