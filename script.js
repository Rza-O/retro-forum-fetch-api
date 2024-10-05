const loadAllPosts = async (category) => {

    // dynamic api

    // Way 1
    // if(category){
    //     console.log(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`)
    // }
    // else{
    //     console.log(`https://openapi.programming-hero.com/api/retro-forum/posts`)
    // }

    // Way 2 ternary operator
    

    // const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    // const data = await response.json();
    // console.log(data.posts);



}
loadAllPosts();

const handleSearchByCategory = () => {
    const searchText = document.getElementById('searchPosts').value;
    loadAllPosts(searchText);
}