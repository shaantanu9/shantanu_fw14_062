function sidebar() {


return `<nav  class=" w-[300px] bg-red-100 ml-2 space-y-2 ">
          <!-- <nav class="h-[1000px] w-[300px] bg-red-100 ml-2 space-y-2 "> -->
          
          <h1 class="font-extrabold text-4xl" >NewsShodkk</h1>

          <div class="flex justify-center ">
            <button class=" bg-red-300 mr-4 rounded-lg p-1 text-blue-800" >Login</button>
            <button class=" bg-red-300 rounded-lg p-1 text-blue-800" >Signup</button>
          </div>
          <input type="text" class="rounded-xl pl-2 border h-12 w-full" name="search" id ="searchbar"  placeholder="Search News" id="searchinput" value="">
          <button id="searchbtn" class="bg-blue-300 p-2 rounded-full w-full" >Search</button>

          <div class="grid gap-3" >
            <button class=" bg-gray-300 rounded p-3 font-bold text-blue-500">StartUp</button>
            <button class=" bg-gray-300 rounded p-3 font-bold text-blue-500">NewsLetter</button>
            <button class=" bg-gray-300 rounded p-3 font-bold text-blue-500">Audio</button>
            <button class=" bg-gray-300 rounded p-3 font-bold text-blue-500">Video</button>
          </div>
        </nav>`


    // return your html component here
    //Make sure to give input search box id as ""
}
export default sidebar