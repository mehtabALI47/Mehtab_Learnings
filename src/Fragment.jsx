import { Fragment } from "react";

function fragment(){
    return(
        <Fragment>
        <h1> Header in a fragment tag</h1>
        </Fragment>
    )
}
function fragment2(){
    return(
        <>
        <h1> Header in Fragment</h1>
        </>
    )
}

// jb b hm ksi component ky andr html return krty to hmain 1 parent tag jesay ky <div><div/> ly zarori hota
// but ye div tag ksi kam ka ni hota na koi class ya id kuch b use ni hori hoti, to ab for example hmary
// pass react app ma 100 component hain to 100 div tags extra hngay useless ya phr ksi component pr loop b
// lga ur bar bar call hora to jitni bar b call hoga div tags extra hngy, is chez ko door krny ky liey
// Fragment tag use krty, ye tag just yaha show hota mgr DOM ma ni show hota just isky andr ki html show hoti
// isko use krny ka tarika ya <Fragment> <Fragment/> ya phr empty tag <> </> b use kr skty iska mtlb be 
// fragment hi hota