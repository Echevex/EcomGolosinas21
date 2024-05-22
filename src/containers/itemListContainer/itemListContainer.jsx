const ItemListContainer = ({ greeting }) => {
    return(
        <h2 className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2">{greeting}</h2>
    )
}

export default ItemListContainer