import './restaurants.css'
import { faAdd, faCity, faExclamationCircle, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShowTimer from '../../../../components/base/show-timer/show-timer.component';
import Input from '../../../../components/common/input/input.component';
import Button from '../../../../components/common/button/button.component';
import ContentContainer from '../../content-container/content-container.component';
import Map from '../../../../components/restaurant-details/map/map.component';
import IconSelect from '../../../../components/common/icon-select/icon-select.component';

const RestaurantsSection = () => {
  return <section className="contents restaurants">
    <ShowTimer timeout={0}>
      <div className='header'>
        <h1>اعدادات مطاعمي المتاحة</h1>
      </div>
    </ShowTimer>

    <ContentContainer title="اعدادات مطاعمي المتاحة" subtitle="عرف الاخرين بمطعمك" savable={true}>
      <div className='map-container'>
        <Map location={{ longitude: 25.1972, latitude: 55.2744 }} clickable={true}></Map>
      </div>
      <hr />
      <div>
        <Input label='اسم المطعم'></Input>
        <Input label='وصف المطعم'></Input>
      </div>
      <div>
        <Input label='العنوان'></Input>
        <Input label='رقم الهاتف'></Input>
      </div>
      <div>
        <div className="input-container"><IconSelect icon={faCity} id="hey" options={[{ value: `hebron`, content: `الخليل` }, { value: `qwe2`, content: `qwe2` }]}></IconSelect></div>
        <div className="input-container"><IconSelect icon={faUtensils} id="hey" options={[{ value: `sh3bi`, content: `شعبي` }, { value: `qwe2`, content: `qwe2` }]}></IconSelect></div>
      </div>
      <div className='footer'><p><FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>تأكد من دقة المعلومات قبل حفظ النموذج</p></div>
    </ContentContainer>
  </section>
}

export default RestaurantsSection;