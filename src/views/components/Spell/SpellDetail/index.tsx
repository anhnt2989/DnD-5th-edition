import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStarOfDavid,
  faInfoCircle,
  faSeedling,
  faMeteor,
  faCogs,
  faCannabis,
  faBookDead,
  faStopwatch,
  faBullseye,
  faClock,
  faYinYang,
  faArrowsAltH,
  faBurn,
  faDungeon,
  faTransgender,
  faTransgenderAlt
} from '@fortawesome/free-solid-svg-icons'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import isArray from 'lodash/isArray'
import isObject from 'lodash/isObject'
import isBoolean from 'lodash/isBoolean'

import { TRecordElement, TSpellItemProps } from 'AppModels'

import { depthOf } from '@utils/helperFn'

import styles from './SpellDetail.module.scss'

const SpellDetail: React.FC<TSpellItemProps> = (props): React.ReactElement => {
  const {
    name,
    desc,
    higher_level,
    range,
    components,
    material,
    ritual,
    duration,
    concentration,
    casting_time,
    level,
    attack_type,
    damage,
    school,
    classes,
    subclasses,
  } = props
  // TODO: saved time, gonna fix typing later
  /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
  const mappedData: any = {
    name: {
      label: 'Name',
      content: name,
      icon: <FontAwesomeIcon icon={faStarOfDavid} />
    },
    desc: {
      label: 'Description',
      content: desc,
      icon: <FontAwesomeIcon icon={faInfoCircle} />
    },
    higher_level: {
      label: 'Higher level',
      content: higher_level,
      icon: <FontAwesomeIcon icon={faSeedling} />
    },
    range: {
      label: 'Range',
      content: range,
      icon: <FontAwesomeIcon icon={faMeteor} />
    },
    components: {
      label: 'Component',
      content: components,
      icon: <FontAwesomeIcon icon={faCogs} />
    },
    material: {
      label: 'Material',
      content: material,
      icon: <FontAwesomeIcon icon={faCannabis} />
    },
    ritual: {
      label: 'Ritual',
      content: ritual,
      icon: <FontAwesomeIcon icon={faBookDead} />
    },
    duration: {
      label: 'Duration',
      content: duration,
      icon: <FontAwesomeIcon icon={faClock} />
    },
    concentration: {
      label: 'Concentration',
      content: concentration,
      icon: <FontAwesomeIcon icon={faBullseye} />
    },
    casting_time: {
      label: 'Casting Time',
      content: casting_time,
      icon: <FontAwesomeIcon icon={faStopwatch} />
    },
    level: {
      label: 'Level',
      content: level,
      icon: <FontAwesomeIcon icon={faYinYang} />
    },
    attack_type: {
      label: 'Attack Type',
      content: attack_type,
      icon: <FontAwesomeIcon icon={faArrowsAltH} />
    },
    damage: {
      label: 'Damage',
      content: damage,
      icon: <FontAwesomeIcon icon={faBurn} />
    },
    school: {
      label: 'School',
      content: school,
      icon: <FontAwesomeIcon icon={faDungeon} />
    },
    classes: {
      label: 'Classes',
      content: classes,
      icon: <FontAwesomeIcon icon={faTransgender} />
    },
    subclasses: {
      label: 'Sub Classes',
      content: subclasses,
      icon: <FontAwesomeIcon icon={faTransgenderAlt} />
    },
  }

  return (
    <div className={styles.wrapper}>
      {Object.keys(mappedData).map((key) => (
        <Row key={key}>
          <Col xs={12} lg={6} className={styles.antCol}>
            <p className={styles.label}>
              <span className={styles.labelIcon}>{mappedData[key].icon}</span>
              {mappedData[key].label}
            </p>
          </Col>
          <Col xs={12} lg={18} className={styles.antCol}>
            {
              isArray(mappedData[key].content) &&
              mappedData[key]?.content?.map((el: string | TRecordElement, index: number) => {
                if (isObject(el)) {
                  return <p key={el.index} className="content">{el.name}</p>
                } else {
                  return <p key={`content--${index}`} className={styles.content}>{el}</p>
                }
              })
            }
            {
              isObject(mappedData[key].content) && !isArray(mappedData[key].content) &&
              <p className={styles.content}>
                {depthOf(mappedData[key].content) >= 2 ?
                  <React.Fragment>
                    {
                      Object.keys(mappedData[key].content)?.map(innerKey => {
                        return (
                          <span key={innerKey}>{innerKey} : {JSON.stringify(mappedData[key].content[innerKey])}</span>
                        )
                      })
                    }
                  </React.Fragment>
                  :
                  mappedData[key].content?.name
                }
              </p>
            }
            {
              !isArray(mappedData[key].content) && !isObject(mappedData[key].content) &&
              <p className={styles.content}>
                {
                  isBoolean(mappedData[key].content) &&
                  (mappedData[key].content ? 'YES' : 'NO')
                }
                {
                  !isBoolean(mappedData[key].content) && mappedData[key].content
                }
              </p>
            }
          </Col>
        </Row>
      ))}
    </div>
  )
}

export default SpellDetail