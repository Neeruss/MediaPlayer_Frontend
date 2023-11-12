import { serverURL } from "./serverURL"
import { commonAPI } from "./commonAPI"


//api to upload video

export const uploadAllVideo=async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/videos`,reqBody)
}

//api to get all videos

export const getAllVideos = async()=>{
    return await commonAPI('GET',`${serverURL}/videos`,"")
}

//api to delete a video

export const deleteVideo=async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}

//api to add watch history

export const addHistory=async(videoDetails)=>{
    return await commonAPI('POST',`${serverURL}/history`,videoDetails)
}

//api to get data from the history

export const getAllHistory=async()=>{
    return await commonAPI('GET',`${serverURL}/history`,"")
}

//api to delete history

export const deleteHistory=async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}

//api to add category

export const addCategory=async(body)=>{
    return await commonAPI('POST',`${serverURL}/category`,body)
}

//api to get all category

export const getAllCategory=async()=>{
    return await commonAPI('GET',`${serverURL}/category`,"")
}

//api to get a video

export const getVideo=async(id)=>{
    return await commonAPI('GET',`${serverURL}/videos/${id}`,"")
}

//api to update the category

export const updateCategory=async(id,body)=>{
    return await commonAPI('PUT',`${serverURL}/category/${id}`,body)
}
