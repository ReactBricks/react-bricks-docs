const Tags = ({ tags }) => {
  const getColor = (tag) => {
    switch (tag.toLowerCase()) {
      case 'required':
        return 'bg-violet-200 text-violet-700 dark:text-violet-200 dark:bg-violet-700'
      case 'easy':
        return 'bg-light-blue-200 text-light-blue-700 dark:text-light-blue-200 dark:bg-light-blue-700'
      case 'medium':
        return 'bg-amber-200 text-amber-700 dark:text-amber-200 dark:bg-amber-700'
      case 'heavy':
        return 'bg-rose-200 text-rose-700 dark:text-rose-200 dark:bg-rose-700'
      case 'new':
        return 'bg-lime-200 text-lime-700 dark:text-lime-200 dark:bg-lime-700'
      default:
        return 'bg-gray-200 text-gray-700 dark:text-gray-200 dark:bg-gray-700'
    }
  }

  return (
    <div className="tags flex space-x-2 mt-3 mb-6">
      {tags.map((tag) => {
        return (
          <div key={tag} className={`py-1 px-2 rounded text-xs leading-none tracking-wide font-medium ${getColor(tag)}`}>
            {tag.toUpperCase()}
          </div>
        )
      })}
    </div>
  )
}

export default Tags
