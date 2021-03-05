class AddUrlToBooks < ActiveRecord::Migration[6.1]
  def change
    add_column :books, :img_url, :string
  end
end
