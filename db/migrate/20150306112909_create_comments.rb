class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :body
      t.integer :upvotes
      t.references :post

      t.timestamps
    end
  end
end
