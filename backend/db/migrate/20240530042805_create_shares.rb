class CreateShares < ActiveRecord::Migration[7.1]
  def change
    create_table :shares, id: :uuid do |t|
      t.string :url, limit: 300, null: false
      t.string :description, limit: 300, null: false
      t.references :user, type: :uuid
      t.timestamps
    end
  end
end
