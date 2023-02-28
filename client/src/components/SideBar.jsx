import React,{useState, useEffect} from 'react';
import Api from '../api/Api';

const SideBar = () => {
  const [categorys, setCategorys] = useState([])

  const getCategorys = async()=>{
    try {
      const res = await Api.get('/categorys');
      setCategorys(res.data.categorys)
    } catch (err) {
      console.error(err.message);
    }
  }



  useEffect(()=>{
    getCategorys()
},[])


  return (
    <div className="sidebar">
      <h5>Feeds</h5>
      <ul>
        <li><a href="#">Tranding</a></li>
        <li><a href="#">Hot</a></li>
        <li><a href="#">Popular</a></li>
      </ul>
      <hr />
      <h5>Topics</h5>
      <ul>
        {categorys.map(category =><li key={category.id}><a href="#">{category.name}</a></li>)}
      </ul>
    </div>
  );
};

export default SideBar;