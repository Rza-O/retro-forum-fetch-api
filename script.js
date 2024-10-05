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
    // console.log(`https://openapi.programming-hero.com/api/retro-forum/posts${category ? `?category=${category}` : ''}`)

    const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${category ? `?category=${category}` : ''}`);
    const data = await response.json();
    // console.log(data.posts);
    displayAllPosts(data.posts);
}

const displayAllPosts = (posts) => {
    console.log(posts);
}



loadAllPosts();

const handleSearchByCategory = () => {
    const searchText = document.getElementById('searchPosts').value;
    loadAllPosts(searchText);
}