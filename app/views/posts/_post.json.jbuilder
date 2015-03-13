json.(@post, :id, :title, :content, :upvotes)
json.comments(@post.comments, :id, :body, :author, :upvotes)