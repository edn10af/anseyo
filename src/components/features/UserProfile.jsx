import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import Input from '../common/Input';
import Button from '../common/Button';

export default function UserProfile() {
  const { currentUser, updateProfile } = useAuth();
  const [formData, setFormData] = React.useState({
    name: currentUser?.name || '',
    email: currentUser?.email || '',
    preferredLanguage: currentUser?.preferredLanguage || 'en',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <Input
          label="Email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Button type="submit">Save Changes</Button>
      </form>
    </div>
  );
}