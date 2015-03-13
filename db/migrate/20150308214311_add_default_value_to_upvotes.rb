class AddDefaultValueToUpvotes < ActiveRecord::Migration
  def up
    change_column :posts, :upvotes, :integer, default: 0
    change_column :comments, :upvotes, :integer, default: 0
  end
  
  def down
    change_column :posts, :upvotes, :integer, default: nil
    change_column :comments, :upvotes, :integer, default: nil
  end
end