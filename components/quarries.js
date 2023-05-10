import { gql } from '@apollo/client'

export const FIND_USER = gql`
   query findUserByUsername($username: String){
        findUser(username: $username){
            username
            name
            email
            _id
            verified
        }
    }
`

export const CURRENT_USER = gql`
    query CurrentUser{
        currentUser{
            username
            name
            email
            _id
            verified
        } 
    }
`

export const SEARCH_DASHPOST = gql`
    query searchDashPostByTitle($title: String){
        searchDashpost(title: $title){
          description
            title
            primaryMedia
            date
            _id
            genre
            postID
            type
        }
    }
`

export const DASHPOST = gql`
    query DASHPOST{
        dashPost{
            title
            primaryMedia
            date
            type
            trending
            postID
            _id
            genre
        }
    }
`

export const DASH_NEWS = gql`
    query dashNews($genre: String){
        dashNews(genre: $genre){
            title
            primaryMedia
            date
            _id
        }
    }
`

export const NEWS_PAGE = gql`
    query newsPage($genre: String, $pageNumber: String, $type: String){
        newsPage(genre: $genre, pageNumber: $pageNumber, type: $type){
            title
            primaryMedia
            description
            date
            _id
            postID
            type
        }
    }
`
export const PAGE_COUNT = gql`
    query pageCount($genre: String, $type: String){
        pageCount(genre: $genre, type: $type){
           count
        }
    }
`

export const MOVIE_COUNT = gql`
    query LatestMovieCount{
        latestMoviesCount{
           count
        }
    }
`

export const LATEST_SERIES_COUNT = gql`
    query LatestSeriesCount{
        latestSeriesCount{
           count
        }
    }
`

export const RELATED_POST = gql`
    query relatedPost($genre: String){
        relatedPost(genre: $genre){
            title
            primaryMedia
            description
            date
            _id
        }
    }
`

export const TABLE = gql`
    query Table{
        tables{
            table
            league
        }
    }
`

export const FIXTURE = gql`
    query Fixture{
        fixtures{
            fixture
            league
        }
    }
`

export const FIND_POST = gql`
    query findPostById($id: ID){
        findPost(id: $id){
            description
            title
            date
            _id
            primaryMedia
            secondaryMedia
            secondaryMediaType
            genre
        }
    }
`

export const LATEST_MOVIES = gql`
    query latestMovies($pageNumber: String){
        latestMovies(pageNumber: $pageNumber){
            title
            description
            primaryMedia
            date
            _id
            postID
            type
        }
    }
`

export const LATEST_SERIES = gql`
    query latestSeries($pageNumber: String){
        latestSeries(pageNumber: $pageNumber){
            title
            description
            primaryMedia
            date
            _id
            postID
            type
        }
    }
`

export const FIND_MOVIE = gql`
    query findMovieById($id: ID){
        findMovie(id: $id){
            title
            description
            primaryMedia
            secondaryMedia
            date
            language
            stars
            trailer
            source
            comments{
                text
                sender{
                    username
                    name
                    email
                    _id
                    verified
                }
                _id
                date
                likes{
                    username
                    _id
                }
                thumbsUp{
                    username
                    _id
                }
                hate{
                    username
                    _id
                }
                sad{
                    username
                    _id
                }
                funny{
                    username
                    _id
                }
                comments{
                    text
                    sender{
                        username
                        name
                        email
                        _id
                        verified
                    }
                    _id
                    date
                    likes{
                        username
                        _id
                    }
                    thumbsUp{
                        username
                        _id
                    }
                    hate{
                        username
                        _id
                    }
                    sad{
                        username
                        _id
                    }
                    funny{
                        username
                        _id
                    }
                    comments{
                        text
                        sender{
                            username
                            name
                            email
                            _id
                            verified
                        }
                        _id
                        date
                        likes{
                            username
                            _id
                        }
                        thumbsUp{
                            username
                            _id
                        }
                        hate{
                            username
                            _id
                        }
                        sad{
                            username
                            _id
                        }
                        funny{
                            username
                            _id
                        }
                        comments{
                            text
                            sender{
                                username
                                name
                                email
                                _id
                                verified
                            }
                            _id
                            date
                            likes{
                                username
                                _id
                            }
                            thumbsUp{
                                username
                                _id
                            }
                            hate{
                                username
                                _id
                            }
                            sad{
                                username
                                _id
                            }
                            funny{
                                username
                                _id
                            }
                        }
                    }
                }
            }
            releaseDate
            genre
            _id
            country
            director
        }
    }
`

export const FIND_MUSIC = gql`
    query findMusicById($id: ID){
        findMusic(id: $id){
            title
            description
            primaryMedia
            secondaryMedia
            date
            stars
            comments{
                text
                sender{
                    username
                    name
                    email
                    _id
                    verified
                }
                _id
                date
                likes{
                    username
                    _id
                }
                thumbsUp{
                    username
                    _id
                }
                hate{
                    username
                    _id
                }
                sad{
                    username
                    _id
                }
                funny{
                    username
                    _id
                }
                comments{
                    text
                    sender{
                        username
                        name
                        email
                        _id
                        verified
                    }
                    _id
                    date
                    likes{
                        username
                        _id
                    }
                    thumbsUp{
                        username
                        _id
                    }
                    hate{
                        username
                        _id
                    }
                    sad{
                        username
                        _id
                    }
                    funny{
                        username
                        _id
                    }
                    comments{
                        text
                        sender{
                            username
                            name
                            email
                            _id
                            verified
                        }
                        _id
                        date
                        likes{
                            username
                            _id
                        }
                        thumbsUp{
                            username
                            _id
                        }
                        hate{
                            username
                            _id
                        }
                        sad{
                            username
                            _id
                        }
                        funny{
                            username
                            _id
                        }
                        comments{
                            text
                            sender{
                                username
                                name
                                email
                                _id
                                verified
                            }
                            _id
                            date
                            likes{
                                username
                                _id
                            }
                            thumbsUp{
                                username
                                _id
                            }
                            hate{
                                username
                                _id
                            }
                            sad{
                                username
                                _id
                            }
                            funny{
                                username
                                _id
                            }
                        }
                    }
                }
            }
            label
            _id
        }
    }
`

export const FIND_SERIES = gql`
    query findSeriesById($id: ID){
        findSeries(id: $id){
            title
            description
            primaryMedia
            secondaryMedia
            date
            language
            stars
           
            releaseDate
            genre
            season
            episode
            episodeTitle
            next{
               _id
               episode
               episodeTitle
            }
            previous{
                _id
                episode
                episodeTitle
            }
            _id
            country
            director
        }
    }
`

export const TRENDING = gql`
    query trending ($type: String){
      trending (type : $type){ 
        title
        primaryMedia
        date
        type
        trending
        postID
        _id
        genre}
    }
`

export const POPULAR_MOVIES = gql`
    query popularMovies ($type: String){
      popularMovies (type : $type){ 
        title
        primaryMedia
        trending
        postID
        _id
        type
        }
    }
`



export const TRENDING_SERIES = gql`
    query trendingSeries ($type: String){
      trendingSeries (type : $type){ 
        title
        primaryMedia
        date
        type
        trending
        postID
        _id
        genre}
    }
`

export const POPULAR_SERIES = gql`
    query popularSeries ($type: String){
      popularSeries (type : $type){ 
        title
        primaryMedia
        date
        type
        trending
        postID
        _id
        genre}
    }
`

export const RESET_PASSWORD = gql`
    mutation resetPasswordByEmail($email: String!){
        resetPassword(email: $email){
            username
        }
    }
`

export const PASSWORD_CHANGE = gql`
    mutation chnagePasswordOnEmail($password: String, $resetToken: String){
        passwordChange(passwod: $password, resetToken: $ resetToken){
            value
        }
    }
`

export const SIGNUP = gql`
    mutation signUpByEmail($name: String!, $email: String!, $username: String!, $password: String!){
        signUp(name: $name, email: $email, username: $username, password: $password){
           value
        }
    }
`

export const SIGNIN = gql`
    mutation signInByUsername($username: String!, $password: String!){
        signIn( username: $username, password: $password){
           value
        }
    }
`



export const CREATE_COMMENT = gql`
    mutation createComment($text: String, $sender: ID, $postID: String, $postType: String ){
        createComment(text: $text, sender: $sender, postID: $postID, postType: $postType){
            text
            sender{
                username
                name
                email
                _id
                verified
            }
            _id
            date

        }
    }
`

export const LIKE = gql`
    mutation like($id: ID){
        like(id: $id){
            _id
        }
    }
`

export const THUMBS_UP = gql`
    mutation thumbsUp($id: ID){
        thumbsUp(id: $id){
            _id
        }
    }
`

export const HATE = gql`
    mutation hate($id: ID){
        hate(id: $id){
            _id
        }
    }
`

export const FUNNY = gql`
    mutation funny($id: ID){
        funny(id: $id){
            _id
        }
    }
`

export const SAD = gql`
    mutation sad($id: ID){
        sad(id: $id){
            _id
        }
    }
`

export const CREATE_TREND = gql`
    mutation createTrend($id: ID!){
        createTrend(id: $id){
            _id
            trending
        }
    }
`